type buttonType = 'button' | 'submit' | 'reset' | undefined;

export interface ButtonProps {
  name: string| any;
  type?: buttonType;
  disabled?: boolean;
  onButtonClick?: () => void;
}
