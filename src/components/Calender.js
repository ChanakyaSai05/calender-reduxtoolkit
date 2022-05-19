import React, { useState } from "react";
import "./Calender.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, CHANGE_MONTH } from "../features/calenderSlice";
import { Months } from "./Months.js";
import "./Calender.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Calender() {
  //Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //
  const user = useSelector(selectUser);
  const [year, setYear] = useState(user.selectedYear);
  const dispatch = useDispatch();
  console.log(user);
  console.log(user.days);
  // let days = [...user.days];
  // let rows = [];
  // let cells = [];
  // days.forEach((item, index) => {
  //   if (index % 7 !== 0) {
  //     cells.push(item);
  //   } else {
  //     rows.push(cells);
  //     cells = [];
  //     cells.push(item);
  //   }
  //   if (index === days.length - 1) {
  //     rows.push(cells);
  //   }
  // });
  const changeMonth = (arrow) => {
    let selectedMonth;
    let selectedYear;
    if (arrow >= 0 && arrow <= 11) {
      selectedMonth = arrow;
      // handleClose();
      if (year) {
        selectedYear = year;
      } else {
        selectedYear = user.selectedYear;
      }
    } else if (arrow === "LEFT") {
      if (user.selectedMonth === 0) {
        selectedMonth = 11;
        selectedYear = user.selectedYear - 1;
      } else {
        selectedMonth = user.selectedMonth - 1;
        selectedYear = user.selectedYear;
      }
    } else if (arrow === "RIGHT") {
      if (user.selectedMonth === 11) {
        selectedMonth = 0;
        selectedYear = user.selectedYear + 1;
      } else {
        selectedMonth = user.selectedMonth + 1;
        selectedYear = user.selectedYear;
      }
    } else {
      selectedMonth = user.selectedMonth + 1;
      selectedYear = user.selectedYear;
    }
    dispatch(
      CHANGE_MONTH({
        selectedMonth: selectedMonth,
        selectedYear: selectedYear,
      })
    );
  };
  return (
    <div className="calender-container">
      <div className="calender-inner-container">
        <h2>Calender</h2>
        <div id="calender-display">
          <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div>
                  <div>
                    <input
                      type="text"
                      className="inputYear"
                      placeholder="Year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                  <div className="change-month">
                    {Months.map((item, index) => (
                      <div
                        key={item + index}
                        onClick={() => changeMonth(index)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button onClick={handleClose}>Close </Button>
                </div>
              </Box>
            </Modal>
          </div>
          <div className="month-header">
            <div className="left-arrow" onClick={() => changeMonth("LEFT")}>
              {"<"}
            </div>
            <div onClick={handleOpen}>
              {Months[user.selectedMonth]},{user.selectedYear}
            </div>
            <div className="right-arrow" onClick={() => changeMonth("RIGHT")}>
              {">"}
            </div>
          </div>
          <div className="calender-container-child">
            <div>Sunday</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
          </div>
          <div className="calender-container-child">
            {user.days.map((item, index) => (
              <div key={item + index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
