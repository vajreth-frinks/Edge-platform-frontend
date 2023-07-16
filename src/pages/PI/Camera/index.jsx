import { Link, useNavigate, useParams } from "react-router-dom";
import Heading from "../../../components/ui-elements/heading";
import { useState } from "react";
import Button from "../../../components/ui-elements/button";
import Logo from "../../../components/ui-elements/logo";
import logo from "../../../assets/plus-circle.svg";
import ControllerModal from "../Controller/ControllerModel";
import ControllerRow from "../Components/rowtable";

const STATUS = {
  INACTIVE: "Inactive",
  ACTIVE: "Active",
};


const Camera = () => {
  const params = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [EditCamera, setEditCamera] = useState(null);
  const [Camera, setCamera] = useState({
    camera_name: "",
    camera_type: "Raspberry 4.0",
    IP_Address: "",
    connection_status: STATUS.INACTIVE,
    Action: "edit",
  });

  const [configurations, setConfigurations] = useState([
    {
      id: 1,
      camera_name: "Rasp_L01S01",
      camera_type: "Raspberry 4.0",
      IP_Address: "192.168.0.174",
      connection_status: STATUS.INACTIVE,
      Action: "edit",
    },
    {
      id: 2,
      camera_name: "Rasp_L02S01",
      camera_type: "Raspberry 4.0",
      IP_Address: "192.168.0.172",
      connection_status: STATUS.ACTIVE,
      Action: "edit",
    },
    {
      id: 3,
      camera_name: "Rasp_L03S01",
      camera_type: "Raspberry 4.0",
      IP_Address: "192.168.0.173",
      connection_status: STATUS.INACTIVE,
      Action: "edit",
    },
  ]);
  const handleEdit = (controller) => {
    setCamera(controller);
    setEditCamera(controller);
    setModalOpen(true);
  };
  const handleChange = (e) => {
    setCamera({ ...Camera, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (EditCamera) {
      // If we're edfawerting a controller, replace it in the array
      setConfigurations(
        configurations.map((conf) =>
          conf.id === EditCamera.id ? Camera : conf
        )
      );
      setEditCamera(null);
    } else {
      // Otherwise, add a new controller
      setConfigurations([
        ...configurations,
        { ...Camera, id: configurations.length + 1 },
      ]);
    }

    setCamera({
      camera_name: "",
      camera_type: "Raspberry 4.0",
      IP_Address: "",
      connection_status: STATUS.INACTIVE,
      Action: "Edit",
    });

    setModalOpen(false);
  };



  return (
    <>
      <ControllerModal 
  isOpen={isModalOpen} 
  onClose={() => setModalOpen(false)} 
  handleSubmit={handleSubmit} 
  handleChange={handleChange} 
  Camera={Camera} 
/>
      <Heading title="Peripherals & Intergrations" showIcon={false} />
      <div className="mt-5 flex justify-between w-3/4">
        <Heading title="Camera" showIcon={false} />
        <Button block={false} onClick={() => setModalOpen(true)}>
          <div className="flex gap-2">
            <div>
              <Logo logo={logo} />
            </div>
            <div>Add Camera</div>
          </div>
        </Button>
      </div>

      <div className="mt-12">
        <div className="max-w-[1080px] w-full bg-red-50">
          <table className="w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className=" bg-primary-light text-white p-3 border border-ink text-left font-bold "
                >
                  S No.
                </th>
                <th
                  scope="col"
                  className="bg-primary-light text-white p-3 border border-ink text-left font-bold "
                >
                  Camera Name
                </th>
                <th
                  scope="col"
                  className="bg-primary-light text-white p-3 border border-ink text-left font-bold "
                >
                  Camera Type
                </th>
                <th
                  scope="col"
                  className="bg-primary-light text-white p-3 border border-ink text-left font-bold "
                >
                    IP_Address
                </th>
                <th
                  scope="col"
                  className="bg-primary-light text-white p-3 border border-ink text-left font-bold "
                >
                  Connection Status
                </th>
                <th
                  scope="col"
                  className="bg-primary-light text-white p-3 border border-ink text-left font-bold "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {configurations.map((configuration, index) => (
                 <ControllerRow configuration={configuration} handleEdit={handleEdit} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Camera;
