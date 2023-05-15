export default function SendForm() {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <div class="container">
        <textarea placeholder="Message" />
      </div>
      <button className="btn btn-primary">Send</button>
    </form>
  );
}
