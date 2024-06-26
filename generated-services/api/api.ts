export * from './auth.service';
import { AuthService } from './auth.service';
export * from './storage.service';
import { StorageService } from './storage.service';
export * from './user.service';
import { UserService } from './user.service';
export * from './userCertificate.service';
import { UserCertificateService } from './userCertificate.service';
export * from './userEducation.service';
import { UserEducationService } from './userEducation.service';
export * from './userExperience.service';
import { UserExperienceService } from './userExperience.service';
export * from './userLanguage.service';
import { UserLanguageService } from './userLanguage.service';
export * from './userProject.service';
import { UserProjectService } from './userProject.service';
export * from './userSkill.service';
import { UserSkillService } from './userSkill.service';
export * from './userSocialNetwork.service';
import { UserSocialNetworkService } from './userSocialNetwork.service';
export const APIS = [AuthService, StorageService, UserService, UserCertificateService, UserEducationService, UserExperienceService, UserLanguageService, UserProjectService, UserSkillService, UserSocialNetworkService];
