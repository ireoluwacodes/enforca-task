import { ForbiddenRequestError } from "../exceptions";
import { IUser } from "../interfaces";
import { User } from "../models";

export class UserService {
  private userModel = User;

  public async updateUserProfile(
    userId: string,
    updateData: any,
  ): Promise<IUser> {
    const user = await this.userModel
      .findByIdAndUpdate(userId, updateData, {
        new: true,
      })
      .lean();
    if (!user) {
      throw new ForbiddenRequestError("User not found");
    }
    return user;
  }

  public async deleteUserAccount(userId: string) {
    return this.userModel.findByIdAndDelete(userId);
  }

  public async addPaymentInfo(
    userId: string,
    paymentInfo: any,
  ): Promise<IUser> {
    const user = await this.userModel.findByIdAndUpdate(
      userId,
      { paymentInfo },
      { new: true },
    );
    if (!user) {
      throw new ForbiddenRequestError("User not found");
    }
    return user;
  }
}
