import Button from "../ui/Button";
import Label from "../ui/Label";

function Settings() {
  return (
    <div className="grid place-content-center bg-purple-100 h-screen overflow-y-auto">
      <form className="mt-9 max-w-4xl flex flex-col items-center justify-center">
        <div className="flex mb-4 flex-col">
          <Label id="profilePicture">Profile Picture</Label>
          <img className="w-40 h-40 rounded-full border-2 border-purple-400 bg-purple-50 shadow-lg shadow-purple-300 inline-block cursor-pointer overflow-hidden align-middle" />
          <input type="file" id="profilePicture" />
        </div>

        <div className="flex mb-4 flex-col">
          <Label id="firstName">Firstname</Label>
          <input
            className="input focus:ring-purple-400"
            type="text"
            id="firstName"
          />
        </div>

        <div className="flex mb-4 flex-col">
          <Label id="lastName">Lastname</Label>
          <input
            className="input focus:ring-purple-400"
            type="text"
            id="lastName"
          />
        </div>

        <div className="flex mb-4 flex-col">
          <Label id="email">Email</Label>
          <input
            className="input focus:ring-purple-400"
            type="text"
            id="email"
          />
        </div>

        <div className="flex mb-4 flex-col">
          <Label id="bio">Bio</Label>

          <textarea id="bio" className="input focus:ring-purple-400" />
        </div>

        <div>
          <Button type="primary">Update account</Button>
        </div>

        <div>
          <Button type="secondary">Cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
