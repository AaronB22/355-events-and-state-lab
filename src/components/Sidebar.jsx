export default function Sidebar({ channels }) {

  const handleChannelClick=(e, channel)=>{
    console.log("clicked",channel.name);
    console.log("type:", e.type)
    console.log("target:", e.target.tagName, e.target.textContent);
    console.log("a real browser event underneath", e.nativeEvent instanceof MouseEvent);
  }
  return (
    <nav className="sidebar">
      <h2>Channels</h2>
      {channels.map((channel) => (
        <button key={channel.id} onClick={(e)=>handleChannelClick(e, channel)} className="channel">
          # {channel.name}
        </button>
      ))}
    </nav>
  );
}
