import { useState } from "react";
import UnMatureVault from "./UnMatureVault";
import MaturedVault from "./MaturedVault";
import { RootTabScreenProps } from "../../../../../types";

const VaultDetails = ({ navigation, route }: RootTabScreenProps<"Vault">) => {
  const [matured, setMatured] = useState(false);
  return (
    <>
      {matured ? (
        <MaturedVault navigation={navigation} route={route} />
      ) : (
        <UnMatureVault setMatured={() => setMatured(true)} />
      )}
    </>
  );
};

export default VaultDetails;
