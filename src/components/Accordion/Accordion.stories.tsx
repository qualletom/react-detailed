import type {Meta, StoryObj} from '@storybook/react';
import { useArgs } from '@storybook/preview-api'
import {Accordion} from "./Accordion";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    argTypes: {
        onTitleClick: {
            action: 'clickTitle'
        }
    },
    decorators: [
        (Story, {args}) => {
            const [, setArgs] = useArgs<typeof args>();

            const onTitleClick = (collapsed: typeof args.collapsed) => {
                args.onTitleClick(!!collapsed);

                if (args.collapsed !== undefined) {
                    setArgs({ collapsed });
                }
            }

            return <Story args={{...args, onTitleClick}} />
        }
    ]
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const ExpandedAccordion: Story = {
    args: {
        title: "Expanded Accordion",
        collapsed: true,
    }
}

export const CollapsedAccordion: Story = {
    args: {
        title: "Collapsed Accordion",
        collapsed: false,
    }
}
