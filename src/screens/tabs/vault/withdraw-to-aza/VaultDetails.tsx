import { useState } from "react";
import UnMatureVault from "./UnMatureVault";
import MaturedVault from "./MaturedVault";

const VaultDetails = () => {
  const [matured, setMatured] = useState(false);
  return <>{matured ? <MaturedVault /> : <UnMatureVault setMatured={() => setMatured(true)} />}</>;
};

export default VaultDetails;
