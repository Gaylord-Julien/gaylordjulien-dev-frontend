'use client';

import * as React from 'react';
import { ComponentPropsWithoutRef, ElementRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { ny } from '@/lib/utils';
import { FieldError } from 'react-hook-form';

export interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  error: FieldError | undefined;
  label: string;
}

const Checkbox = React.forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <div className="items-top flex space-x-2">
      <CheckboxPrimitive.Root
        ref={ref}
        className={ny(
          'peer h-4 w-4 shrink-0 rounded-sm border border-white shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          props.error && 'border-destructive',
          className
        )}
        {...props}
        id={props.id}
        checked={props?.checked}
      >
        <CheckboxPrimitive.Indicator
          className={ny('flex items-center justify-center text-current')}
        >
          <CheckIcon className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={props.id}
          className={ny(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            props.error && 'text-destructive'
          )}
        >
          {props.label}
        </label>
      </div>
    </div>
  )
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
