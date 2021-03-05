import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useOnScreen } from "../../../../customHooks/CustomHooks";
import Filter from "../component/Filter";
import ProductCard from "../component/ProductCard";
import { IProduct, useData } from "../IMacContext";

function Shop() {
  const context = useData();
  const [searchProduct, setSearchProduct] = useState("");
  const [productList, setProductList] = useState<IProduct[]>(
    filterProduct(context ? context.data.product : [], true).slice(0, 6)
  );

  const [showLoading, setShowLoading] = useState<boolean>(false);

  const loadMoreButtonRef = useRef<HTMLDivElement | null>(null);

  function filterProduct(
    currentProductList: IProduct[],
    isInit: boolean = false
  ): IProduct[] {
    let tempProductList: IProduct[] = [];
    if (context) {
      tempProductList = filterBrand(
        context.data.filters.brand,
        currentProductList
      );
      tempProductList = filterColor(
        context.data.filters.color,
        tempProductList
      );
      tempProductList = filterSize(context.data.filters.size, tempProductList);
      tempProductList = filterTypeOfShoes(
        context.data.filters.typeOfShoes,
        tempProductList
      );
    }

    if (!isInit) {
      setProductList(tempProductList);
    }
    return tempProductList;
  }

  useEffect(() => {
    if (productList) filterProduct(productList);
  }, [context && context.data.filters]);

  const onScreen = useOnScreen(
    loadMoreButtonRef,
    "-250px -400px -250px -400px"
  );

  useEffect(() => {
    if (onScreen) {
      setShowLoading(true);
    }
    let timeOut = setTimeout(() => {
      if (context && onScreen) {
        let tempProductList: IProduct[] = [];
        const productToAdd: IProduct[] = filterProduct(
          context.data.product
        ).slice(productList.length, productList.length + 6);
        productToAdd.forEach((product) => {
          if (productList.filter((e) => e.id === product.id).length < 1) {
            tempProductList.push(product);
          }
        });
        filterProduct(productList.concat(tempProductList));
        setShowLoading(false);
      }
    }, 2000);

    return () => {
      setShowLoading(false);
      clearTimeout(timeOut);
    };
  }, [onScreen]);

  return (
    <div className="relative z-10 mt-8 flex px-5">
      <Filter />
      <div>
        <div>
          <input
            onChange={(e) => setSearchProduct(e.target.value)}
            className="text-6xl font-black outline-none w-full py-5"
            type="text"
            placeholder="SEARCH..."
          />
        </div>
        <div className="w-full">
          <p className="pb-2 text-2xs">SHOES / ALL</p>
          {productList && productList.length > 0 ? (
            <div className="grid grid-cols-3 gap-4 ">
              {context && searchProduct.trim().length > 0
                ? productList
                    .filter(
                      (e) =>
                        e.title
                          .toLocaleLowerCase()
                          .startsWith(searchProduct.toLocaleLowerCase()) &&
                        e.price < context.data.priceRange
                    )
                    .map((e, index) => (
                      <div key={index}>
                        <ProductCard product={e} />
                      </div>
                    ))
                : productList &&
                  productList.map((e, index) => (
                    <div key={index}>
                      <ProductCard product={e} />
                    </div>
                  ))}
            </div>
          ) : (
            <div className="bg-gray-50 h-96 relative flex justify-center items-center">
              <div>
                <Image
                  className="cursor-pointer opacity-5"
                  src="/devices/iMac/empty_shoes.svg"
                  width={600}
                  height={400}
                />
              </div>
              <p className="absolute text-xs font-semibold text-gray-500">
                No SNKR found
              </p>
            </div>
          )}
        </div>
        <div ref={loadMoreButtonRef} className="mt-10 flex justify-center">
          <div className="bg-black w-24 h-8 flex justify-center items-center text-2xs font-semibold text-white">
            {showLoading ? (
              <div className="lds-circle ">
                <div></div>
              </div>
            ) : (
              <p> LOAD MORE</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  function filterColor(colorList: string[], productList: IProduct[]) {
    if (colorList.length < 1) {
      return productList;
    } else {
      let returnProductList: IProduct[] = [];
      colorList.forEach((colors) => {
        let allProductWithTheColor = productList.filter((product) =>
          product.color.includes(colors)
        );
        allProductWithTheColor.forEach((product) => {
          if (
            returnProductList.filter((prod) => prod.id === product.id).length <
            1
          ) {
            returnProductList = [...returnProductList, product];
          }
        });
      });
      return returnProductList;
    }
  }

  function filterSize(SizeList: number[], productList: IProduct[]) {
    if (SizeList.length < 1) {
      return productList;
    } else {
      let returnProductList: IProduct[] = [];
      SizeList.forEach((size) => {
        let allProductWithTheSize = productList.filter((product) =>
          product.size.includes(size)
        );
        allProductWithTheSize.forEach((product) => {
          if (
            returnProductList.filter((prod) => prod.id === product.id).length <
            1
          ) {
            returnProductList = [...returnProductList, product];
          }
        });
      });
      return returnProductList;
    }
  }

  function filterTypeOfShoes(
    typeOfShoes: "RUNING" | "WALKING" | "ALL",
    productList: IProduct[]
  ) {
    if (typeOfShoes === "ALL") {
      return productList;
    } else {
      return productList.filter((e) => e.typeOfShoes.includes(typeOfShoes));
    }
  }

  function filterBrand(brand: string, productList: IProduct[]) {
    if (brand === "ALL") {
      return productList;
    } else {
      return productList.filter((e) => e.brand == brand);
    }
  }
}

export default Shop;
