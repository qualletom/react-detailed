import type {Meta, StoryObj} from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion,
};

export default meta;
type Story = StoryObj<typeof UncontrolledAccordion>;

export const Accordion: Story = {
    args: {
        title: "Expanded Accordion",
    }
}
