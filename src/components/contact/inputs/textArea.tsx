import * as React from 'react';

import { ny } from '@/lib/utils';
import { FieldError } from 'react-hook-form';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error: FieldError | undefined;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={ny(
          'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          props.error && 'border-destructive',
          className
        )}
        rows={5}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
