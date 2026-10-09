export default function Sidebar({ channels }) {

  const handleChannelClick=(channel)=>{
    console.log("clicked",channel.name)
  }
  return (
    <nav className="sidebar">
      <h2>Channels</h2>
      {channels.map((channel) => (
        <button key={channel.id} onClick={()=>handleChannelClick(channel)} className="channel">
          # {channel.name}
        </button>
      ))}
    </nav>
  );
}
