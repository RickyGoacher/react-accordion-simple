# React Accordion Component Simple

Simple to use react accordion wrapper component with style config. 

## How it works

- The component works as a wrapper which turns the content added into an accordion.

## How to use

### Install

Installation: `npm install react-accordion-simple`

### Usage

Import the package into your app:

`import { AccordionComponent } from "react-accordion-simple";`

#### Component Example:
```
    <AccordionComponent 
        titlePadding={"1rem"} 
        titleColour={"white"} 
        titleBackgroundColour={"#2C514C"} 
        borderBottomColour={"white"} 
        contentPadding={"1rem"} 
        contentColour={"black"} 
        contentBackgroundColour={"white"} 
    >
        <>
            <div className="title">
                <h3>Number One</h3>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
            </div>
        </>

        <>
            <div className="title">
                <h3>Number Two</h3>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
            </div>
        </>
        
        <>
            <div className="title">
                <h3>Number Three</h3>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
            </div>
        </>
        
        <>
            <div className="title">
                <h3>Number Four</h3>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
            </div>
        </>
    </AccordionComponent>
```
### Component Options:

    - The <AccordionComponent> MUST follow this format
        <>
            <div className="title">
    
            </div>
            <div className="content">
           
            </div>
        </> 

    -  `titlePadding={"1rem"} `
        Padding for title.

    -   `titleColour={"white"}` 
        Text colour for title.

    -  `titleBackgroundColour={"#2C514C"}`
        Title Bakcground Colour.

    -  `borderBottomColour={"white"}`
        Border between titles colour.

    -  `contentPadding={"1rem"}`
        Content section padding.

    -  `contentColour={"black"}`
        Content section text colour.

    - `contentBackgroundColour={"white"}`
        Content section background colour.

 ## Example

![Accordion example](https://raw.githubusercontent.com/RickyGoacher/react-accordion-simple/main/assets/images/accordion-example.png)
