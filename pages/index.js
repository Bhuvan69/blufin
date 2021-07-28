import { useEffect } from "react";
import { useRouter } from "next/router";

import DefaultLayout from "../components/DefaultLayout";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === "/") {
      router.push("/landing");
    }
  });
  return <DefaultLayout />;
}