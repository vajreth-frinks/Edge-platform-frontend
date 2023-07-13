import React, { useMemo, useState } from "react";
import Heading from "../../../components/ui-elements/heading";
import Steps, { baseSteps } from "../../../components/ui-elements/steps";
import Button from "../../../components/ui-elements/button";
import { Container } from "..";
import { useNavigate } from "react-router-dom";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
const CreateInstance = () => {
  const [step, setStep] = useState(0);
  const [isOpen,setIsOpen]=useState(false);
  const navigate=useNavigate();
  
  const handleCloseModal = () => {
    setIsOpen(false);
  };


  const handleNextStep = () => {

    if (step === baseSteps.length - 1) {
      navigate("/instances");
      return;
    }
    setStep((step) => {
      if (step === baseSteps.length - 1) {
        return step;
      }
      return step + 1;
    });
  };

  const handlePrevStep = () => {
    setStep((step) => {
      if (step === 0) {
        return step;
      }
      return step - 1;
    });
  };

  
  
  
  const renderStep = () => {
    const stepObj = {
      0: (
        <Step1
          
        />
      ),
      1: (
        <Step2  
        
        />
      ),
      2: (
        <Step3
          
        />
      ),
    };

    return stepObj[step];
  };
  return (
    <Container>
      <Heading title="Instances / New Instance" />
        <div className="md:mt-5 lg:mt-6" >
        <div className="bg-white rounded-[10px] p-2 md:p-8 mt-4 max-w-[838px] relative">

        <div className="mb-2 font-bold text-lg ml-8 ">Provide the Instance details below</div>
       
        <div className="xs:w-full ml-8 lg:w-3/4">
            <div className=" mb-6">
              <Steps currentStep={step} />
            </div>

            {renderStep()}
            <div className="flex gap-4 w-[300px] mt-4 md:mt-5 lg:mt-6">
              <Button onClick={handlePrevStep} btnType="secondary">
                {step === 0 ? "Cancel" : "Back"}
              </Button>
              <Button onClick={handleNextStep}>
                {step === baseSteps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
            

          </div>

          </div>

        </div>
    </Container>
  
  );
};

export default CreateInstance;
