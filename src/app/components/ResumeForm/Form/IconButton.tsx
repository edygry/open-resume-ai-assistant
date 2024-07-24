import { IconButton } from "components/Button";
import {
  EyeIcon,
  EyeSlashIcon,
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
  TrashIcon,
  ListBulletIcon,
  StarIcon
} from "@heroicons/react/24/outline";

export const StarIconButton = ({
  text,
  setText,
  ref_field
}: {
  text: string;
  setText: (field: any,value:string) => void;
  ref_field: string;
}) => {
  var promptType = ''
  const tooltipText = 'Improve with AI';
  const onClick = async () => {
    let new_text = await fetch(`http://localhost:8000/?q=${text}&c=${ref_field}`).then(r=>r.json()).then(j=>j.message)
    console.log(promptType)
    setText(ref_field, new_text);
  };

  return (
    <div>
    <IconButton onClick={onClick} tooltipText={tooltipText} className='bg-yellow-50'>
      <StarIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
      <span className="sr-only">{tooltipText}</span>
    </IconButton>
    <select name="cars" id="cars" onChange={e=>promptType=e.target.value}>
      <option value="">Choose a Theme</option>
      <option value="i">Impactful</option>
      <option value="go">Goal-Oriented</option>


      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>

  </select>
  <input type="text" />
    </div>
  );
};

export const ShowIconButton = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
}) => {
  const tooltipText = show ? "Hide section" : "Show section";
  const onClick = () => {
    setShow(!show);
  };
  const Icon = show ? EyeIcon : EyeSlashIcon;

  return (
    <IconButton onClick={onClick} tooltipText={tooltipText}>
      <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
      <span className="sr-only">{tooltipText}</span>
    </IconButton>
  );
};

type MoveIconButtonType = "up" | "down";
export const MoveIconButton = ({
  type,
  size = "medium",
  onClick,
}: {
  type: MoveIconButtonType;
  size?: "small" | "medium";
  onClick: (type: MoveIconButtonType) => void;
}) => {
  const tooltipText = type === "up" ? "Move up" : "Move down";
  const sizeClassName = size === "medium" ? "h-6 w-6" : "h-4 w-4";
  const Icon = type === "up" ? ArrowSmallUpIcon : ArrowSmallDownIcon;

  return (
    <IconButton
      onClick={() => onClick(type)}
      tooltipText={tooltipText}
      size={size}
    >
      <Icon className={`${sizeClassName} text-gray-400`} aria-hidden="true" />
      <span className="sr-only">{tooltipText}</span>
    </IconButton>
  );
};

export const DeleteIconButton = ({
  onClick,
  tooltipText,
}: {
  onClick: () => void;
  tooltipText: string;
}) => {
  return (
    <IconButton onClick={onClick} tooltipText={tooltipText} size="small">
      <TrashIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
      <span className="sr-only">{tooltipText}</span>
    </IconButton>
  );
};

export const BulletListIconButton = ({
  onClick,
  showBulletPoints,
}: {
  onClick: (newShowBulletPoints: boolean) => void;
  showBulletPoints: boolean;
}) => {
  const tooltipText = showBulletPoints
    ? "Hide bullet points"
    : "Show bullet points";

  return (
    <IconButton
      onClick={() => onClick(!showBulletPoints)}
      tooltipText={tooltipText}
      size="small"
      className={showBulletPoints ? "!bg-sky-100" : ""}
    >
      <ListBulletIcon
        className={`h-4 w-4 ${
          showBulletPoints ? "text-gray-700" : "text-gray-400"
        }`}
        aria-hidden="true"
      />
      <span className="sr-only">{tooltipText}</span>
    </IconButton>
  );
};
