import Button from "../ui/Button";
import Label from "../ui/Label";

function Settings() {
  return (
    <div className=" grid place-content-center bg-purple-100 h-screen">
      <form className="max-w-4xl flex flex-col items-center justify-center">
        <div className="flex mb-4 flex-col">
          <Label id="profilePicture">Profile Picture</Label>
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
          <input className="input focus:ring-purple-400" type="text" id="bio" />
        </div>

        <div>
          <Button>Cancel</Button>
        </div>

        <div>
          <Button>Update account</Button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
