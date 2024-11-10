import { Inter, Raleway, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400"] });
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["900"],
  style: ["normal"],
  display: "swap",
});
