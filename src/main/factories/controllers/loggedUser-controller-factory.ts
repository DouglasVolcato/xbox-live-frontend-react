import { GetProfileInfoUseCase } from "../../../data/usecases/profile/getProfileInfoUseCase";
import { UpdateProfileUseCase } from "../../../data/usecases/profile/updateProfile-usecase";
import { GetUserInfoUseCase } from "../../../data/usecases/user/getUserInfo-usecase";
import { UpdateUserUseCase } from "../../../data/usecases/user/updateUser-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { ProfileHandler } from "../../../helpers/profile/profileHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { UserHandler } from "../../../helpers/user/userHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { LoggedUserController } from "../../../presentation/controllers/loggedUser-controller";
import { makeLoggedUserPageFactory } from "../pages/loggedUser-page-factory";

export function makeLoggedUserControllerFactory(): LoggedUserController {
  const loggedUserPage = makeLoggedUserPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const tokenHandler = new TokenHandler();

  const userHandler = new UserHandler();
  const userRouter = new UserRouter(httpRequestAdapter);
  const getUserInfoUseCase = new GetUserInfoUseCase(
    userRouter,
    tokenHandler,
    userHandler
  );

  const profileHandler = new ProfileHandler();
  const profileRouter = new ProfileRouter(httpRequestAdapter);
  const getProfileInfoUseCase = new GetProfileInfoUseCase(
    profileRouter,
    tokenHandler,
    profileHandler
  );

  const updateUserUseCase = new UpdateUserUseCase(
    userRouter,
    tokenHandler,
    userHandler
  );
  const updateProfileUseCase = new UpdateProfileUseCase(
    profileRouter,
    tokenHandler,
    profileHandler
  );

  return new LoggedUserController(
    loggedUserPage,
    getUserInfoUseCase,
    getProfileInfoUseCase,
    updateUserUseCase,
    updateProfileUseCase
  );
}
