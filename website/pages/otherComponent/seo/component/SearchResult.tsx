import React from "react";
import ResultFindCard from "./ResultFindCard";

function SearchResult() {
  return (
    <div className="mt-4">
      <p className="text-gray-500 text-xs">
        Environ 221 000 000 résultats (0,63 secondes)
      </p>
      <div className="mt-2">
        <ResultFindCard
          title={"Développeur Mobile & Web"}
          link={"www.kabwiziserge.com/"}
          description={
            "Bonjour! je me nomme Serge Kabwizi. Je suis un programeur indépendant full stack et je me specialise dans la conception d’application mobile et de site web sur mesure."
          }
        />
        <ResultFindCard
          title={"Website développeur "}
          link={"www.otherwebsite.com/"}
          description={"other very long description or too short lol..."}
        />
        <ResultFindCard
          title={"Mobile app maker "}
          link={"www.other.com/"}
          description={"other very long description or too short lol..."}
        />
      </div>
    </div>
  );
}

export default SearchResult;
