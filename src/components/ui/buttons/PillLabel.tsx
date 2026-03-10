import './PillLabel.css'

type PillLabelProps = {
  text: string;
};

export default function PillLabel({ text }: PillLabelProps) {
  return (
    <span className="pill-label">
      {text}
    </span>
  );
}