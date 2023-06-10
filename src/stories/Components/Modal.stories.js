import React, { useState } from "react";

import { Button, Modal, Typography, Input } from "../../lib/components";

import {
  TableWithPagination,
  TableWithRowAndColumClick,
} from "./Table.stories";

export default {
  title: "Overlays/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: '`import { Modal } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = (args) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => setShowModal((prev) => !prev)}
        label="Show Modal"
      />
      <Modal loading isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <Typography component="body1">Modal Header</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography component="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Button label="Cancel" variant="secondary" />
            <Button label="Save" />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Sizes = (args) => {
  const [showModalXSmall, setShowModalXSmall] = useState(false);
  const [showModalSmall, setShowModalSmall] = useState(false);
  const [showModalMedium, setShowModalMedium] = useState(false);
  const [showModalLarge, setShowModalLarge] = useState(false);
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Button
          onClick={() => setShowModalXSmall((prev) => !prev)}
          label="X Small Modal"
        />
        <Button
          onClick={() => setShowModalSmall((prev) => !prev)}
          label="Small Modal"
        />
        <Button
          onClick={() => setShowModalMedium((prev) => !prev)}
          label="Medium Modal"
        />
        <Button
          onClick={() => setShowModalLarge((prev) => !prev)}
          label="Large Modal"
        />
      </div>
      <Modal
        isOpen={showModalXSmall}
        size="xs"
        onClose={() => setShowModalXSmall(false)}
      >
        <Modal.Header>
          <Typography component="body1">Save Filter</Typography>
        </Modal.Header>
        <Modal.Body>
          <Input label="InputLabel" placeholder="Input Placeholder" />
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Button label="Cancel" variant="secondary" />
            <Button label="Save" />
          </div>
        </Modal.Footer>
      </Modal>
      <Modal
        size="sm"
        isOpen={showModalSmall}
        onClose={() => setShowModalSmall(false)}
      >
        <Modal.Header>
          <Typography component="body1">Modal Header</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography component="body3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Button label="Update" />
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={showModalMedium}
        onClose={() => setShowModalMedium(false)}
        size="md"
      >
        <Modal.Header>
          <Typography component="body1">Create Application Group</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography component="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Button label="Cancel" variant="secondary" />
            <Button label="Save" />
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={showModalLarge}
        onClose={() => setShowModalLarge(false)}
        size="lg"
      >
        <Modal.Header>
          <Typography component="body1">Create Application Group</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography component="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Button label="Cancel" variant="secondary" />
            <Button label="Save" />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const ModalWithTable = (args) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => setShowModal((prev) => !prev)}
        label="Show Modal"
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <Typography component="body1">Modal Header</Typography>
        </Modal.Header>
        <Modal.Body>
          <TableWithRowAndColumClick />
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Button
              label="Cancel"
              variant="secondary"
              onClick={() => setShowModal(false)}
            />
            <Button label="Save" />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const ModalUnderModal = (args) => {
  const [showModal, setShowModal] = useState(false);
  const [showInnerModal, setInnerModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => setShowModal((prev) => !prev)}
        label="Show Modal"
      />
      <Modal
        isOpen={showModal}
        size="lg"
        onClose={() => setShowModal(false)}
        closeOnOutSideClick={!showInnerModal}
      >
        <Modal.Header>
          <Typography component="body1">Modal Header</Typography>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              marginBottom: 20,
            }}
          >
            <Button
              onClick={() => setInnerModal((prev) => !prev)}
              label="Show Modal"
            />
          </div>
          <TableWithPagination />
        </Modal.Body>
      </Modal>
      {showInnerModal && (
        <Modal id="inner" isOpen size="sm" onClose={() => setInnerModal(false)}>
          <Modal.Header>
            <Typography component="body1">Inner Modal Header</Typography>
          </Modal.Header>
          <Modal.Body>
            <TableWithPagination />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
