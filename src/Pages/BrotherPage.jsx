import React from "react";
import { useParams } from "react-router-dom";
import ActiveBrother from "./ActiveBrother";
import NotFoundPage from "./NotFoundPage";

export default function BrotherPage({ brothers }) {
  const { name } = useParams();
  const brotherIndex = brothers.findIndex(
    (brother) => brother.name.replace(/\s+/g, "") === name,
  );

  const brotherInfo = brotherIndex !== -1 ? brothers[brotherIndex] : null;

  if (!brotherInfo) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <ActiveBrother brotherInfo={brotherInfo} />
    </div>
  );
}
