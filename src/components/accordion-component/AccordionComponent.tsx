import { ReactNode, SyntheticEvent, useState } from "react";

interface AccordionComponentInterface {
    children: Array<ReactNode>;
    titlePadding: string;
    titleColour: string;
    titleBackgroundColour: string;
    contentPadding: string;
    contentColour: string;
    contentBackgroundColour: string;
    borderBottomColour: string;
}

const AccordionComponent = (props:AccordionComponentInterface) => {

    const Styles = `

        .accordion-wrapper .title {
            padding: ${props.titlePadding};
            border-bottom: solid 1px ${props.borderBottomColour};
            background-color: ${props.titleBackgroundColour};
            color: ${props.titleColour};

        }

        .accordion-wrapper .content {
            background-color: ${props.contentBackgroundColour};
            color: ${props.contentColour};
            padding: ${props.contentPadding};
            padding-top: 0;
            padding-bottom: 0;
        }

        .accordion-wrapper.active .content {
            max-height: unset;
            padding: ${props.contentPadding};
        }
    `;

    const [getAccordionState, setAccordionState] = useState(() => {
        return Object.entries(props.children).map((item, index) => {
            return index === 0 ? true : false;
        });
    });

    function accordionOnClick (e:SyntheticEvent) {

        const target = (e.target as HTMLElement);

        if (target !== null && target.closest('.accordion-wrapper') !== null) {
            const ClickedIndex = Number((target.closest('.accordion-wrapper') as HTMLElement).getAttribute('data-index'))
            const currentDate = getAccordionState.map((item, index) => {
                return ClickedIndex == index ? true : false;
            });
            setAccordionState(currentDate);
        }
    }

    const AccordionItems = props.children.map((item, index) => { 
        return (
            <div key={index} data-index={index} className={getAccordionState[index] ? "accordion-wrapper active": "accordion-wrapper"} onClick={(e) => accordionOnClick(e)}>
                {item}
            </div>
        );
    });

    return (
        <>
            <style>
                {Styles}
            </style>
            {AccordionItems}
        </>
    );
}

export default AccordionComponent;