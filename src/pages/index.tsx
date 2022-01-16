import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Redirect(): null {
  const { replace } = useRouter();

  useEffect(() => {
    replace("/browse");
  }, []);

  return null;
}
