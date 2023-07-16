import React from 'react';
import ellipsegreen from "../../../../assets/Ellipse green.png";
import ellipsered from "../../../../assets/Ellipse red.png";
import edit from "../../../../assets/edit-2.png";
import Logo from '../../../../components/ui-elements/logo';

const STATUS = {
  INACTIVE: "Inactive",
  ACTIVE: "Active",
};

const ControllerRow = ({ configuration, handleEdit, index }) => (
  <tr key={configuration.id}>
    <td className={`${index % 2 === 0 ? "bg-sky-lightest" : "bg-secondary-light"} text-ink-light text-sm px-5 py-1.5 border border-ink text-center `}>
      {configuration.id}
    </td>
    <td className={`${index % 2 === 0 ? "bg-sky-lightest" : "bg-secondary-light"} text-ink-light text-sm px-5 py-1.5 border border-ink `}>
      {configuration.controller_name}
    </td>
    <td className={`${index % 2 === 0 ? "bg-sky-lightest" : "bg-secondary-light"} text-ink-light text-sm px-5 py-1.5 border border-ink `}>
      {configuration.controller_type}
    </td>
    <td className={`${index % 2 === 0 ? "bg-sky-lightest" : "bg-secondary-light"} text-ink-light text-sm px-5 py-1.5 border border-ink `}>
      {configuration.IP_Address}
    </td>
    <td className={`${index % 2 === 0 ? "bg-sky-lightest" : "bg-secondary-light"} text-ink-light text-sm px-5 py-1.5 border border-ink`}>
      <div className="flex gap-2">
        {
          configuration.connection_status===STATUS.ACTIVE ? (
            <Logo logo={ellipsegreen}/>
          ) : (
            <Logo logo={ellipsered}/>
          )
        }
        {configuration.connection_status}
      </div>
    </td>
    <td className={`${index % 2 === 0 ? "bg-sky-lightest" : "bg-secondary-light"} text-sm px-5 py-1.5 border border-ink `}>
      <div className="flex gap-2">
        <Logo logo={edit}/>
        <button onClick={() => handleEdit(configuration)}>
          {configuration.Action}
        </button>
      </div>
    </td>
  </tr>
);

export default ControllerRow;
