import { tw } from 'typewind'

export function NxWelcome({ title }: { title: string }) {
  return (
    <>
      <div className={tw.text_indigo_500.bg_yellow_500.p_2}>
        tasdasdasdasdasd
      </div>
      <div className="bg-indigo-500 p-2 font-mono">Hello!</div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1 className={tw.important(tw.text_red_100)}>
              <span> Hello there, </span>
              Welcome {title} 👋
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
