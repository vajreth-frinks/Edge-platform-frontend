import React from "react";
import Heading from "../../../components/ui-elements/heading";
import Database from "../../../components/ui-elements/database";
import { Link, useParams } from "react-router-dom";

const Case = () => {
  const params = useParams();
  return (
    <>
      <Heading title="Skull Cap Inspection" showIcon={false} />

      <p className="mt-4">
        Skull Cap Inspection /{" "}
        <Link to={`/projects/${params.projectId}`}>Datasets</Link> /{" "}
        <Link
          to={`/projects/${params.projectId}/position/${params.positionId}`}
        >
          SKU 1
        </Link>{" "}
        /{" "}
        <Link
          to={`/projects/${params.projectId}/position/${params.positionId}/condition/${params.conditionId}`}
        >
          Top View
        </Link>{" "}
        /{" "}
        <Link
          to={`/projects/${params.projectId}/position/${params.positionId}/condition/${params.conditionId}/case/${params.caseId}`}
        >
          High exposure
        </Link>
      </p>

      <div className="flex mt-4 gap-6 flex-wrap">
        <Database.Item title="Good" to={`${location.pathname}/version/1`} />
      </div>
    </>
  );
};

export default Case;
