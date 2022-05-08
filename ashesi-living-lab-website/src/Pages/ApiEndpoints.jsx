import "./ApiEndpoints.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ApiEndpoints = () => {
  const acordion_style = {
    background: "#efefef",
    boxShadow: "none",
    marginBottom: "10px",
    color: "black",
  };

  return (
    <div className="ApiEndpoints Page">
      <div>
        <h1 className="page-header">API Endpoints</h1>

        <div>
          <div style={{ margin: "0 0 50px 0" }}>
            <div style={{ color: "gray" }}>REST ENPOINTS</div>
            <h2
              style={{
                margin: "0 0 0px 0",
                display: "inline-block",
                marginRight: "30px",
              }}
            >
              For developers
            </h2>
          </div>

          <div>
            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#8963BA",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    GET
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    https://ashesilivinglabapi.herokuapp.com/api/get
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div>Gets live data from living lab real time database</div>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#8963BA",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    POST
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    https://ashesilivinglabapi.herokuapp.com/api/post/
                    {"{request}"}
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div>Post a living lab record for testing purposes.</div>
                <div>
                  request = {"{humidity: int, motion: int, light: int}"}
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#B20D30",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    ?
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    Endpoint
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>Coming Soon</AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#B20D30",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    ?
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    Endpoint
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>Coming Soon</AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#B20D30",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    ?
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    Endpoint
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>Coming Soon</AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#B20D30",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    ?
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    Endpoint
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>Coming Soon</AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#B20D30",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    ?
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    Endpoint
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>Coming Soon</AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#B20D30",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    ?
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    Endpoint
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>Coming Soon</AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#B20D30",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    ?
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    Endpoint
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>Coming Soon</AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#B20D30",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    ?
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    Endpoint
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>Coming Soon</AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#B20D30",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    ?
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    Endpoint
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>Coming Soon</AccordionDetails>
            </Accordion>

            <Accordion sx={acordion_style}>
              <AccordionSummary
                className="api-endpoint"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      marginRight: "30px",
                      display: "inline-block",
                      backgroundColor: "#B20D30",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    ?
                  </div>
                  <div style={{ marginRight: "30px", display: "inline-block" }}>
                    Endpoint
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>Coming Soon</AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiEndpoints;
