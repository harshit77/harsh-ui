import React, { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import Modal from "./Modal";
import Typography from "./Typography";
import Checkbox from "./Checkbox";


const ColumnSelector = ({ columnList, heading, setColumnList, setColumnSelector, headerLabel = 'Column Name' }) => {

    const [newColumnList, setNewColumnList] = useState([...columnList]);
    const [columnName, setColumnName] = useState({ value: 'column_name', label: headerLabel, showColumn: false });
    const [disableSave, setDisableSave] = useState(true);

    const handleCheck = ({ target }) => {
        let newColumn = newColumnList.map(item => {
            if (target.value === 'column_name') {
                item.showColumn = !columnName.showColumn;
            } else {
                if (item.dataIndex === target.value) {
                    item.showColumn = !item.showColumn;
                    if(item.showColumn === false){
                        setColumnName({ ...columnName, showColumn: false })
                    }
                }
            }
            return item;
        })
        if (target.value === 'column_name') {
            setColumnName({ ...columnName, showColumn: !columnName.showColumn })
        }
        setNewColumnList(newColumn);
        setDisableSave(false);
    }

    const onSave = () => {
        setColumnList(newColumnList); 
        setColumnSelector(false);
    }


    return (
        <Modal isOpen size="sm" onClose={() => setColumnSelector(false)}>
            <Modal.Header>
                <Typography component="body1">{heading}</Typography>
            </Modal.Header>
            <Modal.Body>
                <Checkbox>
                    <div className="harsh-ui-columnselector">
                        <div className="harsh-ui-columnselector-header">
                            <Checkbox.Item value='column_name' checked={columnName.showColumn} isSelectAll={true} onChange={handleCheck} />
                            <Typography component="body2">{columnName.label}</Typography>
                        </div>

                        <div className="harsh-ui-columnselector-container">
                            {
                                newColumnList.map((item) => {
                                    return <div className="harsh-ui-columnselector-columnselector-saperator">
                                        <Checkbox.Item value={item.dataIndex} checked={item.showColumn} onChange={handleCheck} />
                                        <Typography component="body2">{item.title}</Typography>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </Checkbox>
            </Modal.Body>
            <Modal.Footer>
                <div className="harsh-ui-columnselector-footer-wrapper">
                    <Button
                        label="Cancel"
                        variant="secondary"
                        size="medium"
                        onClick={() => setColumnSelector(false)}
                        className='harsh-ui-columnselector-footer-button'
                    />
                    <Button
                        label="Save"
                        size="medium"
                        disabled={disableSave}
                        className='harsh-ui-columnselector-footer-button'
                        onClick={onSave}
                    />
                </div>
            </Modal.Footer>
        </Modal>)

}

ColumnSelector.propTypes = {
    className: PropTypes.string,
    columnList: PropTypes.array,
    heading: PropTypes.string,
    setColumnList: PropTypes.func,
    setColumnSelector: PropTypes.func
};

export default ColumnSelector;