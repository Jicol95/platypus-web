import { Vue, Component } from "vue-property-decorator";

@Component
export default class Validation extends Vue {
  protected requiredRule(value: string) {
    return !!value || "Field required";
  }

  protected requiredNumberRule(value: number) {
    if (value === 0) {
      return true;
    }

    return !!value || "Field required";
  }

  protected emailAddressRule(value: string) {
    return /.+@.+\..+/.test(value) || "E-mail must be valid";
  }

  protected passwordStrengthRule(value: string) {
    return (
      /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(value) ||
      "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number and one special character"
    );
  }

  protected passwordsMatchRule(value: string, matchValue: string) {
    return value === matchValue || "Passwords must match";
  }

  protected notEmptyRule<T>(value: Array<T>) {
    return !!value.length || "Please select at least one option";
  }

  protected isPercentage<T>(value: number) {
    return value <= 100 || "Input must be less than 100%";
  }
}
