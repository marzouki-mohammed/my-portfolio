
const ProfileCardSkils = () => {
  return (
    <div className="p-3 border bg-white m-md-2">
      <p className="mb-3 fs-4">Skiles</p>

      <div className="mb-3 d-flex gap-2">
        <span className="text-dark fs-6 p-1 border rounded-1 bg-light me-1">UX Design</span>
        <span className="text-dark fs-6 p-1 border rounded-1 bg-light me-1">Product Design</span>
        <span className="text-dark fs-6 p-1 border rounded-1 bg-light me-1">Webflow</span>
        <span className="text-dark fs-6 p-1 border rounded-1 bg-light me-1">Figma</span>
        <span className="text-dark fs-6 p-1 border rounded-1 bg-light">....</span>
      </div>

      <div className="mb-3">
        <strong>Location:</strong> 🇦🇺 Melbourne, Australia
      </div>

      <div className="mb-3">
        <strong>Website:</strong>{" "}
        <a href="https://minawinkel.com" target="_blank" rel="noopener noreferrer" className=" text-black-50">
          minawinkel.com
        </a>
      </div>

      <div className="mb-3">
        <strong>Email:</strong>{" "}
        <a href="mailto:hello@minawinkel.com" className=" text-black-50">hello@minawinkel.com</a>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-light">Add to list</button>
        <button className="btn btn-dark">Message</button>
      </div>
    </div>
  );
};

export default ProfileCardSkils;
