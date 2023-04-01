import { useState } from "react";
import UnMatureVault from "./UnMatureVault";
import MaturedVault from "./MaturedVault";
import { RootTabScreenProps } from "../../../../../types";
import { CommonScreenProps } from "../../../../common/navigation/types";

const VaultDetails = ({ navigation, route }: CommonScreenProps<"details">) => {
  const [matured, setMatured] = useState(false);
  return (
    <>
      {matured ? (
        <MaturedVault navigation={undefined} route={undefined} />
      ) : (
        <UnMatureVault setMatured={() => setMatured(true)} />
      )}
    </>
  );
};

export default VaultDetails;
