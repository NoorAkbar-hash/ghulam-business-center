# Security Specification: Ghulam CRM

## Data Invariants
1. A lead must have a name, email, phone, and service.
2. Status must be one of: 'New', 'Contacted', 'Converted', 'Lost'.
3. Only authenticated admins can read, update, or delete leads.
4. Anyone (public) can create (insert) a lead via the contact form.

## The "Dirty Dozen" Payloads (Lead Collection)

### Identity Attacks
1. **Unauthorized Read**: Anonymous user attempts to list `/leads`. (DENIED)
2. **Unauthorized Delete**: Authenticated non-admin (if any) attempts to delete a lead. (DENIED)

### Integrity Attacks (Shadow Update)
3. **Ghost Field**: Inserting a lead with `isAdmin: true`. (DENIED)
4. **Invalid Type**: Updating `status` with a number instead of a string. (DENIED)
5. **Invalid Status**: Updating `status` to 'VIP'. (DENIED)

### Resource Poisoning (Denial of Wallet)
6. **Huge Payload**: Inserting a lead where `message` is 1.5MB. (DENIED)
7. **Malformed ID**: Creating a lead with a 2KB junk character ID. (DENIED)

### PII Protection
8. **PII Leak**: Authenticated user trying to read another lead's details without admin role. (DENIED)

### Temporal Integrity
9. **Fake Timestamp**: Inserting a lead with a `createdAt` from 1999. (DENIED)
10. **Immutable Field**: Attempting to change `createdAt` on update. (DENIED)

### Authentication
11. **Spoofed Admin**: User with `admin: true` in their own user doc (if used) trying to access. (Must be verified against server-defined admin list).

### State Shortcutting
12. **Terminal Force**: Moving status from 'New' to 'Converted' without required intermediate updates (if applicable, but here we just need to ensure admins can do it).

## Test Runner (Logic Summary)
All writes must pass `isValidLead()`.
Public insert allowed.
Admin-only read/write.
