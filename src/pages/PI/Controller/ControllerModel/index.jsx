import React from 'react';
import Modal from '../../../../components/ui-elements/modal';
import Button from '../../../../components/ui-elements/button';
import Input from '../../../../components/ui-elements/input';

const ControllerModal = ({ isOpen, onClose, handleSubmit, handleChange, Controller }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 ">
        <div className="text-2xl font-bold ml-20">
          Add Controller
        </div>gsrg
        <div className="text-center text-xl text-ink-lightest">
          Configure the IP address of controller and provide the details below for
        </div>
        
        <div>
          <div className="text-base font-medium">Controller Name</div>
          <Input
            name="controller_name"
            value={Controller.controller_name}
            placeholder="Controller Name"
            onChange={handleChange}
            shadow
            required
          />
        </div>
        <div>
          <div className="text-base font-medium">IP Address</div>
          <Input
            name="IP_Address"
            value={Controller.IP_Address}
            placeholder="IP Address"
            onChange={handleChange}
            shadow
            required
          />
        </div>
        <div>
          <Button
            className="mb-3 font-medium"
            type="submit"
            onClick={onClose}
          >
            Add Controller
          </Button>
          <Button
            className="bg-transparent font-medium"
            btnType="secondary"
            type="button"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  </Modal>
);

export default ControllerModal;
