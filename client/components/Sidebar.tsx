import { useState } from "react";
import {
  Home,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Plus,
  Share2,
  Users,
  Send,
  Puzzle,
  Settings,
  ChevronsUpDown,
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  badge?: "purple" | "gray";
  active?: boolean;
  indent?: boolean;
  onClick?: () => void;
}

function NavItem({
  icon,
  label,
  count,
  badge,
  active = false,
  indent = false,
  classes = "",
  onClick,
}: NavItemProps) {
  const badgeColor = badge === "purple" ? "bg-purple" : "bg-light-secondary";

  return (
    <button
      onClick={onClick}
      className={`${classes || "" } w-full h-[42px] rounded-xl flex items-center gap-3 px-4 transition-colors ${    
        active
          ? "bg-white"
          : indent
            ? "bg-light hover:bg-gray"
            : "bg-white hover:bg-gray"
      } ${indent ? "" : ""}`}
    >
      <div className="w-5 h-5 flex-shrink-0 text-dark">{icon}</div>
      <span className="text-sm font-medium text-dark flex-1 text-left">
        {label}
      </span>
      {count !== undefined && (
        <div
          className={`h-[22px] min-w-[26px] px-2 ${badgeColor} rounded-full flex items-center justify-center`}
        >
          <span className="text-dark text-xs font-medium">{count}</span>
        </div>
      )}
    </button>
  );
}

interface CollapsibleSectionProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  badge?: "purple" | "gray";
  children?: React.ReactNode;
  defaultOpen?: boolean;
  hasChevron?: boolean;
}

function CollapsibleSection({
  icon,
  label,
  count,
  badge,
  children,
  defaultOpen = false,
  hasChevron = true,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const badgeColor = badge === "purple" ? "bg-purple" : "bg-light-secondary";

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-[42px] rounded-xl flex items-center gap-3 px-4 bg-[#C3C2C1] hover:bg-[#B8B7B6] transition-colors ${
          (isOpen)
          ? "bg-gray hover:bg-gray"
          : "bg-white hover:bg-gray"
        }`}
        >
        <div className="w-5 h-5 flex-shrink-0 text-dark">{icon}</div>
        <span className="text-sm font-medium text-dark flex-1 text-left">
          {label}
        </span>
        {count !== undefined && (
          <div
            className={`h-[22px] min-w-[26px] px-2 ${badgeColor} rounded-full flex items-center justify-center`}
          >
            <span className="text-dark text-xs font-medium">{count}</span>
          </div>
        )}
        {hasChevron &&
          (isOpen ? (
            <ChevronUp
              className="w-[18px] h-[18px] text-dark"
              strokeWidth={1.5}
            />
          ) : (
            <ChevronDown
              className="w-[18px] h-[18px] text-dark"
              strokeWidth={1.5}
            />
          ))}
      </button>
      {isOpen && children && <div className="mt-0 space-y-0">{children}</div>}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 w-60 h-[calc(100vh-56px)] bg-light overflow-y-auto">
      <div className="h-full p-3 space-y-0 relative">
        {/* User Profile Card */}
        <div className="mb-4 h-16 rounded-xl bg-white flex items-center gap-3 px-4">
          <div className="w-9 h-9 rounded-full bg-purple flex items-center justify-center flex-shrink-0">
            <span className="text-dark text-xs font-medium">LI</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-dark text-base font-semibold truncate">
              Lorem ipsum
            </div>
            <div className="text-gray-text text-sm font-medium">Pro plan</div>
          </div>
          <ChevronsUpDown
            className="w-5 h-5 text-dark flex-shrink-0"
            strokeWidth={1.5}
          />
        </div>

        {/* Navigation Items */}
        <div className="space-y-0">
          <NavItem
            icon={<Home strokeWidth={1.5} />}
            label="Home"
            active={true}
          />

          <CollapsibleSection
            icon={<MessageCircle strokeWidth={1.5} />}
            label="Chats"
            count={32}
            badge="purple"
            defaultOpen={true}
          >
            <CollapsibleSection
              icon={<div className="w-5 h-5" />}
              label="Central"
              count={32}
              badge="purple"
              defaultOpen={false}
              hasChevron={true}
            >
              <div className="ml-[42px] h-0 my-0" />
            </CollapsibleSection>

            <div className="ml-[42px] h-0 my-0" />
            <NavItem
              icon={<div className="w-5 h-5" />}
              label="Unassigned"
              count={20}
              badge="gray"
              indent={true}
            />

            <div className="ml-[42px] h-0 my-0" />
            <NavItem
              icon={<div className="w-5 h-5" />}
              label="Assigned to me"
              count={12}
              badge="gray"
              indent={true}
            />

            <div className="ml-[42px] h-0 my-0" />
            <NavItem
              icon={<div className="w-5 h-5" />}
              label="Unread"
              count={32}
              badge="gray"
              indent={true}
            />

            <div className="ml-[42px] h-0 my-0" />
            <NavItem
              icon={<div className="w-5 h-5" />}
              label="Trash"
              indent={true}
            />
          </CollapsibleSection>

          <CollapsibleSection
            icon={<div className="w-5 h-5" />}
            label="Test inbox"
            count={0}
            badge="purple"
            defaultOpen={false}
          />

          <button className="w-full h-[42px] rounded-xl flex items-center gap-3 px-4 bg-light hover:bg-white transition-colors">
            <Plus className="w-5 h-5 text-gray-text" strokeWidth={1.5} />
            <span className="text-sm font-medium text-gray-text flex-1 text-left">
              Add new inbox
            </span>
          </button>

          <NavItem icon={<Share2 strokeWidth={1.5} />} label="Automation" />

          <CollapsibleSection
            icon={<Users strokeWidth={1.5} />}
            label="Contacts"
            defaultOpen={false}
          />

          <CollapsibleSection
            icon={<Send strokeWidth={1.5} />}
            label="Campaigns"
            defaultOpen={false}
          />
        </div>

        {/* Bottom Section */}
        <div className="mt-auto absolute bottom-[16px] w-[216px] space-y-0">
          <NavItem icon={<Puzzle strokeWidth={1.5} />} label="Integrations" />
          <NavItem icon={<Settings strokeWidth={1.5} />} label="Settings" />
        </div>
      </div>
    </aside>
  );
}
