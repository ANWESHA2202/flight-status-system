import Layout from "@/components/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <>Home inside layout</>
    </Layout>
  );
}
