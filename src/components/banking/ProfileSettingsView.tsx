import React from 'react';
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Building,
  ShieldCheck,
  Check,
  BadgeCheck,
  Headphones,
  Landmark,
} from 'lucide-react';
import { useBankingAuth } from '../../context/BankingAuthContext';
import { UserAvatar } from '../common/UserAvatar';
import { ProfilePhotoManager } from './ProfilePhotoManager';

interface ProfileSettingsViewProps {
  onNavigateSupport?: () => void;
}

export const ProfileSettingsView: React.FC<ProfileSettingsViewProps> = ({ onNavigateSupport }) => {
  const { user } = useBankingAuth();

  if (!user) return null;

  const isVerified = user.status === 'active';

  // Format date of birth safely
  const formattedDob = user.dateOfBirth
    ? new Date(user.dateOfBirth).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Verified on file';

  // Format member enrollment date
  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
      })
    : '2024';

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* ========================================================================= */}
      {/* 1. EXECUTIVE PROFILE HEADER SUMMARY                                       */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-[#152033] rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs relative overflow-hidden">
        {/* Top executive brand bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1C2B4C] via-[#C8102E] to-[#1C2B4C]" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
          {/* Avatar Monogram & Primary Identity */}
          <div className="flex items-center space-x-5">
            <div className="relative">
              <UserAvatar
                firstName={user.firstName}
                lastName={user.lastName}
                avatarUrl={user.avatarUrl}
                size="2xl"
                shape="rounded-2xl"
                className="border-2 border-white dark:border-[#152033] ring-4 ring-slate-100 dark:ring-slate-800 shadow-md"
              />
              {isVerified && (
                <div
                  title="Authoritative Verified Customer"
                  className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-1 rounded-full border-2 border-white dark:border-[#152033] shadow-xs"
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              )}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-[#1C2B4C] dark:text-white tracking-tight">
                  {user.firstName} {user.middleName ? `${user.middleName} ` : ''}{user.lastName}
                </h1>

                {isVerified ? (
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Verified Profile</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Pending Verification</span>
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                Private Wealth &amp; Premier Banking Client
              </p>

              <div className="text-[11px] text-slate-400 flex flex-wrap items-center gap-2 pt-0.5">
                <span>
                  Client ID: <span className="font-mono text-slate-700 dark:text-slate-200 font-semibold">{user.id}</span>
                </span>
                <span>•</span>
                <span>Member Since: {memberSince}</span>
                <span>•</span>
                <span className="text-[#C8102E] font-semibold">Tier: Reserve Premier</span>
              </div>
            </div>
          </div>

          {/* Division Designation */}
          <div className="flex flex-col items-start sm:items-end space-y-1.5 self-stretch sm:self-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-slate-100 dark:bg-[#10192A] rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
              <Building className="w-3.5 h-3.5 text-[#1C2B4C] dark:text-blue-400" />
              <span>Aurelith Reserve • Dallas, TX</span>
            </div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
              Federal Reserve System Direct Member
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. PROFILE PHOTO & CAMERA CAPTURE SECTION                                 */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-[#152033] rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
        <ProfilePhotoManager />
      </div>

      {/* ========================================================================= */}
      {/* 2. READ-ONLY PERSONAL IDENTITY & CONTACT RECORDS                          */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-[#152033] rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#10192A] text-[#1C2B4C] dark:text-slate-200 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#1C2B4C] dark:text-white">Verified Personal Identity</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Official contact, residential, and identification records on file with Aurelith Reserve.
              </p>
            </div>
          </div>

          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-[#10192A] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
            <span>Read-Only Record</span>
          </span>
        </div>

        {/* Read-Only Identity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Legal Name */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#10192A] border border-slate-200/80 dark:border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
              Legal Full Name
            </span>
            <div className="text-sm font-bold text-[#1C2B4C] dark:text-white">
              {user.firstName} {user.middleName ? `${user.middleName} ` : ''}{user.lastName}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Primary signatory registered on account ledger
            </div>
          </div>

          {/* Email Address */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#10192A] border border-slate-200/80 dark:border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
              Primary Electronic Notification Address
            </span>
            <div className="text-sm font-bold text-[#1C2B4C] dark:text-white flex items-center space-x-1.5 truncate">
              <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
              <span className="truncate">{user.email}</span>
            </div>
            <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium flex items-center space-x-1">
              <BadgeCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>Verified for transaction notices &amp; security tokens</span>
            </div>
          </div>

          {/* Primary Phone Number */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#10192A] border border-slate-200/80 dark:border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
              Primary Telephone Number (E.164 International)
            </span>
            <div className="text-sm font-bold font-mono text-slate-900 dark:text-white flex items-center space-x-1.5">
              <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
              <span>{user.phoneNumber}</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Authorized for SMS 2FA security alerts and wire confirmations
            </div>
          </div>

          {/* Date of Birth */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#10192A] border border-slate-200/80 dark:border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
              Date of Birth
            </span>
            <div className="text-sm font-bold text-[#1C2B4C] dark:text-white flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
              <span>{formattedDob}</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Verified identity record under Federal BSA / KYC regulations
            </div>
          </div>

          {/* Associated Institution / Bank Name */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#10192A] border border-slate-200/80 dark:border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
              Associated Bank Name
            </span>
            <div className="text-sm font-bold text-[#1C2B4C] dark:text-white flex items-center space-x-1.5 truncate">
              <Landmark className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
              <span className="truncate">{user.bankName || 'Aurelith Reserve'}</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Primary banking institution affiliation registered at onboarding
            </div>
          </div>

          {/* Residential Address */}
          <div className="md:col-span-2 p-4 rounded-2xl bg-slate-50 dark:bg-[#10192A] border border-slate-200/80 dark:border-slate-800 space-y-1.5">
            <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>Official Residential Address on File</span>
            </span>
            <div className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
              {user.residentialAddress?.street || '100 Main Street'},{' '}
              {user.residentialAddress?.city || 'Dallas'},{' '}
              {user.residentialAddress?.state || 'TX'}{' '}
              {user.residentialAddress?.zipCode || '75201'},{' '}
              <span className="font-bold text-[#1C2B4C] dark:text-blue-400">
                {user.residentialAddress?.country || 'United States'}
              </span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Tax domicile and official account statements dispatch jurisdiction
            </div>
          </div>
        </div>

        {/* Regulatory & Concierge Update Guidance Notice */}
        <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 flex items-start space-x-3 text-xs text-blue-900 dark:text-blue-200">
          <ShieldCheck className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-slate-700 dark:text-slate-300">
            <p className="font-semibold text-blue-950 dark:text-blue-300">
              Official Identity Records &amp; KYC Verification
            </p>
            <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
              To safeguard account security and prevent unauthorized profile modifications, personal identity and contact coordinates are held as permanent, read-only records.
              If you have legally changed your name, relocated your residential address, or need to update your phone number, please contact your Aurelith Reserve private wealth advisor or submit a verified ticket with customer support.
            </p>
            {onNavigateSupport && (
              <button
                type="button"
                onClick={onNavigateSupport}
                className="mt-2 inline-flex items-center space-x-1.5 text-xs font-bold text-[#1C2B4C] dark:text-blue-400 hover:text-[#C8102E] dark:hover:text-red-400 underline cursor-pointer"
              >
                <Headphones className="w-3.5 h-3.5" />
                <span>Contact Private Wealth Advisor</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
