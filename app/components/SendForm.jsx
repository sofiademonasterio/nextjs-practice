export default function SendForm() {
  return (
    <div className="container">
      <form className="row">
        <div class="mb-3">
          <label for="formControl" class="form-label">
            form
          </label>
          <input
            type="name"
            class="form-control"
            id="formName"
            placeholder="name"
          />
          <input
            type="email"
            class="form-control"
            id="formEmail"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary btn-lg">Send</button>
      </form>
    </div>
  );
}
