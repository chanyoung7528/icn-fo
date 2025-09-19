import { cn } from '../lib';
import { Checkbox, Label } from '../ui';

export function CheckboxWithLabel({
  id,
  label,
  ...props
}: { id: string; label: string } & React.ComponentProps<typeof Checkbox>) {
  return (
    <div className="flex items-center gap-[.8rem]">
      <Checkbox id={id} {...props} />
      <Label htmlFor={id} className={cn('text-md text-gray-100', props.disabled && 'text-gray-20')}>
        {label}
      </Label>
    </div>
  );
}
