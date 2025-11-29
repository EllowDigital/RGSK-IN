import * as React from 'react';
import { FormItemContext } from './form-contexts';
import { cn } from '@/lib/utils';

type FormItemProps = React.HTMLAttributes<HTMLDivElement>;
const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(( { className, ...props }, ref ) => {
  const id = React.useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = 'FormItem';

export { FormItem };
