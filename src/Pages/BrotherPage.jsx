import React from "react";
import { useParams } from "react-router-dom";
import ActiveBrother from "./ActiveBrother";


export default function BrotherPage({brothers}) {
  const { name } = useParams();
  const brotherIndex = brothers.findIndex(
    (brother) => brother.name.replace(/\s+/g, "") === name,
  );

  const brotherInfo = brotherIndex !== -1 ? brothers[brotherIndex] : null;
  const prevBrother = brothers[brotherIndex - 1];
  const nextBrother = brothers[brotherIndex + 1];

  if (!brotherInfo) {
    return <div>Brother not found</div>;
  }

  return (
    <div>
      <ActiveBrother brotherInfo={brotherInfo} />
    </div>
  );
}
