import { LogoShort } from "@/assets/LogoShort";
import { Button } from "./ui/button";
import { ChartHistogramIcon } from "@/assets/icon/chart-histogram";
import { PackageIcon } from "@/assets/icon/package";
import { PlusSignIcon } from "@/assets/icon/plus-sign";
import { UserIcon } from "@/assets/icon/user";

export function Header() {
  return(
    <div className="flex items-center justify-between px-5 py-4">
      <LogoShort />

      <div className="flex items-center gap-2">
        <Button variant={"ghost"} size={"sm"} className="flex items-center gap-2">
          <ChartHistogramIcon width={20} height={20} color="--foreground" />
          Dashboard
        </Button>

        <Button variant={"ghost"} size={"sm"} className="flex items-center gap-2">
          <PackageIcon width={20} height={20} color="--foreground" />
          Produtos
        </Button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <Button className="flex items-center w-[157px] h-10 gap-1">
          <PlusSignIcon width={20} height={20} color="--foreground"/>
          Novo produto
        </Button>
        <div className="fill-foreground bg-accent rounded-sm w-12 h-12 flex justify-center items-center">
          <UserIcon width={40} height={40} color={"--foreground"} />
        </div>
      </div>
    </div>
  )
}