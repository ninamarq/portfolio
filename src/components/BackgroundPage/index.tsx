import './style.scss';

export default function BackgroundPage(props: {
  top: string;
  bottom: string;
}) {
  const { top, bottom } = props;
  return (
    <div>
      <h1 className="background" id="background-top-right">{top}</h1>
      <hr className="background" id="background-top-left" />
      <h1 className="background" id="background-bottom-left">{bottom}</h1>
    </div>
  );
}
