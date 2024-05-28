import {
  PlusCircleIcon,
  CalendarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";

export default function Sidebar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `flex items-center lg:flex-col bg-[#020202] px-4 lg:px-0 lg:py-8 border-t lg:border-t-0 lg:border-r border-neutral-600 ${className}`
      )}
    >
      <nav>
        <ul className="flex gap-x-4 lg:flex-col lg:gap-y-6 w-fit lg:mx-auto">
          <li>
            <SidebarItem Icon={PlusCircleIcon} content="Add a new goal" href="/dashboard"/>
          </li>
          <li>
            <SidebarItem Icon={CalendarIcon} content="View timeline" href="/dashboard/timeline"/>
          </li>
        </ul>
      </nav>

      <SidebarItem
        Icon={Cog6ToothIcon}
        content="Settings"
        className="lg:mt-auto ml-auto lg:mx-auto"
        href="/dashboard/settings"
      />
    </div>
  );
}

function SidebarItem({
  Icon,
  content,
  className,
  href
}: {
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  content: string;
  className?: string;
  href: string
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size={"icon"}
            className={cn(`rounded-full hover:bg-neutral-800 ${className}`)}
            asChild
          >
            <Link href={href}>
              <Icon className="w-6 h-6" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
