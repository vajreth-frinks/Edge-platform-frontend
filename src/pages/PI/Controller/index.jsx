import { Link, useNavigate, useParams } from "react-router-dom";
import Heading from "../../../components/ui-elements/heading";
import { useState } from "react";
import Button from "../../../components/ui-elements/button";
import Logo from "../../../components/ui-elements/logo";
import logo from "../../../assets/plus-circle.svg";
import ControllerModal from "./ControllerModel";
import ControllerRow from "../Components/rowtable";

const STATUS = {
  INACTIVE: "Inactive",
  ACTIVE: "Active",
};


const Controller = () => {
  const params = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [Editcontroller, setEditController] = useState(null);
  const [Controller, setController] = useState({
    controller_name: "",
    controller_type: "Raspberry 4.0",
    IP_Address: "",
    connection_status: STATUS.INACTIVE,
    Action: "edit",
  });

  const [configurations, setConfigurations] = useState([
    {
      id: 1,
      controller_name: "Rasp_L01S01",
      controller_type: "Raspberry 4.0",
      IP_Address: "192.168.0.174",
      connection_status: STATUS.INACTIVE,
      Action: "edit",
    },
    {
      id: 2,
      controller_name: "Rasp_L02S01",
      controller_type: "Raspberry 4.0",
      IP_Address: "192.168.0.172",
      connection_status: STATUS.ACTIVE,
      Action: "edit",
    },
    {
      id: 3,
      controller_name: "Rasp_L03S01",
      controller_type: "Raspberry 4.0",
      IP_Address: "192.168.0.173",
      connection_status: STATUS.INACTIVE,
      Action: "edit",
    },
  ]);
  const handleEdit = (controller) => {
    setController(controller);
    setEditController(controller);
    setModalOpen(true);
  };
  const handleChange = (e) => {
    setController({ ...Controller, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Editcontroller) {
      // If we're editing a controller, replace it in the array
      setConfigurations(
        configurations.map((conf) =>
          conf.id === Editcontroller.id ? Controller : conf
        )
      );
      setEditController(null);
    } else {
      // Otherwise, add a new controller
      setConfigurations([
        ...configurations,
        { ...Controller, id: configurations.length + 1 },
      ]);
    }

    setController({
      controller_name: "",
      controller_type: "Raspberry 4.0",
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
  Controller={Controller} 
/>
      <Heading title="Peripherals & Intergrations" showIcon={false} />
      <div className="mt-5 flex justify-between w-3/4">
        <Heading title="Controller" showIcon={false} />
        <Button block={false} onClick={() => setModalOpen(true)}>
          <div className="flex gap-2">
            <div>
              <Logo logo={logo} />
            </div>
            <div>Add Controller</div>
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
                  Controller Name
                </th>
                <th
                  scope="col"
                  className="bg-primary-light text-white p-3 border border-ink text-left font-bold "
                >
                  Controller Type
                </th>
                <th
                  scope="col"
                  className="bg-primary-light text-white p-3 border border-ink text-left font-bold "
                >
                  IP Address
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

export default Controller;
