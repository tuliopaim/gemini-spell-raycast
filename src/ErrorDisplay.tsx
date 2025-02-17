import { Detail, ActionPanel, Action } from "@raycast/api";

interface ErrorDisplayProps {
    isLoading: boolean;
    onEditApiKey: () => void;
    errorMessage: string | null;
}

export function ErrorDisplay({ isLoading, errorMessage, onEditApiKey }: ErrorDisplayProps) {

    const markdown = `## Gemini Spell Checker

      Error: ${errorMessage}
      
      Select some text in any application and run this command to check spelling and grammar.`;

    return (
        <Detail
            markdown={markdown}
            isLoading={isLoading}
            actions={
                <ActionPanel>
                    <Action title="Edit Api Key" onAction={onEditApiKey} />
                </ActionPanel>
            }
        />
    );
}
