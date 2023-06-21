import React, { Component } from "react";
import styled from "styled-components";
import Section from "./Section";

function Home(){
    return(
        <Container>
            <Section
               title = "Model S"
               description = "Order Online for Touchless Delivery"
               leftButtonText = "EXISTING INVENTORY"
               rightButtonText = "CUSTOM DESIGN"
               image = "/model-s.jpg"

            />
            <Section
               title = "Model Y"
               description = "Order Online for Touchless Delivery"
               leftButtonText = "EXISTING INVENTORY"
               rightButtonText = "CUSTOM DESIGN"
               image = "/model-y.jpg"

            />
            <Section
               title = "Model X"
               description = "Order Online for Touchless Delivery"
               leftButtonText = "EXISTING INVENTORY"
               rightButtonText = "CUSTOM DESIGN"
               image = "/model-x.jpg"

            />
            <Section
               title = "Model 3"
               description = "Order Online for Touchless Delivery"
               leftButtonText = "EXISTING INVENTORY"
               rightButtonText = "CUSTOM DESIGN"
               image = "/model-3.jpg"

            />
            <Section
               title = "Lowest Cost Solar Panels in America"
               description = "Money-back Gurantee"
               leftButtonText = "Order now"
               rightButtonText = "learn more"
               image = "/solar-panel.jpg"

            />
            <Section
               title = "Solar for New Roofs"
               description = "Solar Roofs Costs Less Than a New Roof"
               leftButtonText = "order now"
               rightButtonText = "learn more"
               image = "/solar-roof.jpg"

            />
            <Section
               title = "Accessories"
               description = ""
               leftButtonText = "Shop Now"
               rightButtonText = ""
               image = "/accessories.jpg"

            />
            
        </Container>
    )
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;