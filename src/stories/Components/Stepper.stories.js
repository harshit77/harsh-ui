import React, { useState } from "react";
import { Stepper, Button, Modal, Accordion } from "../../lib/components";
import { Article } from "../../lib/icons";

export default {
  title: "Components/Stepper",
  component: Stepper,
  subcomponents: {
    "Stepper.step": Stepper.Step,
  },
  parameters: {
    docs: {
      description: {
        component: '`import { Stepper } from "harsh-ui/index"`',
      },
    },
  },
};

const steps = [
  "Appliance Detail",
  "vCenter Details",
  "NSX Manager Detail",
  "POD VARs",
];

export const Default = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <Stepper
        activeStep={activeStep}
        onChange={(updatedStep) => setActiveStep(updatedStep)}
      >
        {steps.map((label) => (
          <Stepper.Step key={label} allowClick={true}>
            {label}
          </Stepper.Step>
        ))}
      </Stepper>
      <div
        style={{
          marginTop: 100,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          label="Prev"
          variant="primary"
          onClick={() => activeStep >= 0 && setActiveStep(activeStep - 1)}
        />
        <Button
          label="Next"
          variant="primary"
          onClick={() =>
            activeStep < steps.length - 1 && setActiveStep(activeStep + 1)
          }
        />
      </div>
    </>
  );
};

Default.argTypes = Stepper.props;

export const ModalWithStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        label="Open Modal"
        variant="primary"
        onClick={() => setOpen(true)}
      />
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        size="full"
        //   closeOnOutSideClick={!showInnerModal}
      >
        <Modal.Header>
          <div style={{ display: "flex", alignItems: "center" }}>
            Create POD
            <Stepper
              activeStep={activeStep}
              onChange={(updatedStep) => setActiveStep(updatedStep)}
            >
              {steps.map((label) => (
                <Stepper.Step key={label} allowClick={true}>
                  {label}
                </Stepper.Step>
              ))}
            </Stepper>
          </div>
        </Modal.Header>
        <Modal.Body>Form comes Here</Modal.Body>
      </Modal>
    </>
  );
};

export const Error = () => {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <>
      <Stepper
        activeStep={activeStep}
        onChange={(updatedStep) => setActiveStep(updatedStep)}
      >
        {steps.map((label, index) => {
          const labelProps = {};
          if (index === 1) {
            labelProps.error = true;
          } else if (index === 0) {
            labelProps.completed = true;
          } else labelProps.completed = false;

          return (
            <Stepper.Step key={label} {...labelProps} allowClick={true}>
              {label}
            </Stepper.Step>
          );
        })}
      </Stepper>
      <div
        style={{
          marginTop: 100,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          label="Prev"
          variant="primary"
          onClick={() => activeStep >= 0 && setActiveStep(activeStep - 1)}
        />
        <Button
          label="Next"
          variant="primary"
          onClick={() =>
            activeStep < steps.length - 1 && setActiveStep(activeStep + 1)
          }
        />
      </div>
    </>
  );
};

Error.storyName = " Stepper with step 2 as an Error Step";

export const StepperClick = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Stepper.Step key={label}>{label}</Stepper.Step>
        ))}
      </Stepper>
      <div
        style={{
          marginTop: 100,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          label="Prev"
          variant="primary"
          onClick={() => activeStep >= 0 && setActiveStep(activeStep - 1)}
        />
        <Button
          label="Next"
          variant="primary"
          onClick={() =>
            activeStep < steps.length - 1 && setActiveStep(activeStep + 1)
          }
        />
      </div>
    </>
  );
};

StepperClick.storyName = "Disabled Stepper click";

export const TagBasedStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepsWithIcon = [
    {
      title: "PREP",
      icon: <Article />,
    },
    {
      title: "Build",
      icon: <Article />,
    },
    {
      title: "Integrate",
      icon: <Article />,
    },
    {
      title: "App",
      icon: <Article />,
    },
  ];

  return (
    <>
      <Stepper
        activeStep={activeStep}
        onChange={(updatedStep) => setActiveStep(updatedStep)}
        variant="tagBased"
      >
        {stepsWithIcon.map((item) => (
          <Stepper.Step
            key={item.title}
            variant="tagBased"
            icon={item.icon}
            allowClick={true}
          >
            {item.title}
          </Stepper.Step>
        ))}
      </Stepper>
      <div
        style={{
          marginTop: 100,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          label="Prev"
          variant="primary"
          onClick={() => activeStep >= 0 && setActiveStep(activeStep - 1)}
        />
        <Button
          label="Next"
          variant="primary"
          onClick={() =>
            activeStep < steps.length - 1 && setActiveStep(activeStep + 1)
          }
        />
      </div>
    </>
  );
};

TagBasedStepper.storyName = "Tag Based Stepper";

export const SequentialStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Accordion
        className="harsh-ui-accordion__item--wrapper--sequential"
        expanded={expanded}
        onChange={() => setExpanded(true)}
      >
        <Accordion.AccordionTitle>
          <h3>Configure</h3>
          <p className="harsh-ui-stepper--subtitle">
            Configure network and Directory.
          </p>
        </Accordion.AccordionTitle>
        <Accordion.AccordionItem>
          <Stepper
            activeStep={activeStep}
            onChange={(updatedStep) => setActiveStep(updatedStep)}
            variant="sequential"
          >
            {steps.map((label) => (
              <Stepper.Step key={label} variant="sequential" allowClick={true}>
                {label}
              </Stepper.Step>
            ))}
          </Stepper>
        </Accordion.AccordionItem>
      </Accordion>

      <div
        style={{
          marginTop: 100,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          label="Prev"
          variant="primary"
          onClick={() => activeStep >= 0 && setActiveStep(activeStep - 1)}
        />
        <Button
          label="Next"
          variant="primary"
          onClick={() =>
            activeStep < steps.length - 1 && setActiveStep(activeStep + 1)
          }
        />
      </div>
    </>
  );
};

SequentialStepper.storyName = "Sequential Stepper";

export const SequentialStepperDisabled = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Accordion expanded={expanded} onChange={() => setExpanded(true)}>
        <Accordion.AccordionTitle>
          <h3>Configure</h3>
          <p className="harsh-ui-stepper--subtitle">
            Configure network and Directory.
          </p>
        </Accordion.AccordionTitle>
        <Accordion.AccordionItem>
          <Stepper
            activeStep={activeStep}
            onChange={(updatedStep) => setActiveStep(updatedStep)}
            variant="sequential"
          >
            {steps.map((label) => (
              <Stepper.Step key={label} variant="sequential" allowClick={false}>
                {label}
              </Stepper.Step>
            ))}
          </Stepper>
        </Accordion.AccordionItem>
      </Accordion>

      <div
        style={{
          marginTop: 100,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          label="Prev"
          variant="primary"
          onClick={() => activeStep >= 0 && setActiveStep(activeStep - 1)}
        />
        <Button
          label="Next"
          variant="primary"
          onClick={() =>
            activeStep < steps.length - 1 && setActiveStep(activeStep + 1)
          }
        />
      </div>
    </>
  );
};

SequentialStepperDisabled.storyName = "Sequential Stepper with disabled steps";
